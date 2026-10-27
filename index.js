const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');
const meal_category = document.getElementById('meal_category');
const category_status = document.getElementById('category_status');

const loadCategories = async () => {
	try {
		const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		const data = await res.json();
		if (!Array.isArray(data.categories)) throw new Error('Resposta de categorias inválida');

		data.categories.forEach(({ strCategory }) => {
			const option = document.createElement('option');
			option.value = strCategory;
			option.textContent = strCategory;
			meal_category.append(option);
		});
		meal_category.disabled = false;
		category_status.textContent = '';
	} catch (error) {
		console.error('Erro ao buscar categorias:', error);
		category_status.textContent = 'Não foi possível carregar as categorias. Você ainda pode sortear qualquer receita.';
	}
};

loadCategories();

get_meal_btn.addEventListener('click', async () => {
	get_meal_btn.disabled = true;
	const originalText = get_meal_btn.textContent;
	get_meal_btn.textContent = 'Carregando…';

	try {
		let meal;
		if (meal_category.value) {
			const categoryUrl = new URL('https://www.themealdb.com/api/json/v1/1/filter.php');
			categoryUrl.searchParams.set('c', meal_category.value);
			const categoryRes = await fetch(categoryUrl);
			if (!categoryRes.ok) throw new Error(`HTTP ${categoryRes.status}`);
			const categoryData = await categoryRes.json();
			if (!categoryData.meals?.length) {
				meal_container.innerHTML = '<p class="placeholder">Nenhuma receita encontrada nesta categoria.</p>';
				return;
			}

			const selectedMeal = categoryData.meals[Math.floor(Math.random() * categoryData.meals.length)];
			const mealUrl = new URL('https://www.themealdb.com/api/json/v1/1/lookup.php');
			mealUrl.searchParams.set('i', selectedMeal.idMeal);
			const mealRes = await fetch(mealUrl);
			if (!mealRes.ok) throw new Error(`HTTP ${mealRes.status}`);
			const mealData = await mealRes.json();
			meal = mealData.meals?.[0];
		} else {
			const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const data = await res.json();
			meal = data.meals?.[0];
		}

		if (!meal) throw new Error('A API não retornou uma receita');
		createMeal(meal);
	} catch (error) {
		console.error('Erro ao buscar a receita:', error);
		meal_container.innerHTML = `
			<p class="placeholder">
				😕 Não foi possível carregar a receita agora. Tente novamente em instantes.
			</p>`;
	} finally {
		get_meal_btn.disabled = false;
		get_meal_btn.textContent = originalText;
	}
});

const createMeal = (meal) => {
	const ingredients = [];
	// Get all ingredients from the object. Up to 20
	for(let i=1; i<=20; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			// Stop if no more ingredients
			break;
		}
	}
	
	const newInnerHTML = `
		<div class="row">
			<div class="columns five">
				<img src="${meal.strMealThumb}" alt="Meal Image">
				${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
				${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
				${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
			</div>
			<div class="columns seven">
				<h4>${meal.strMeal}</h4>
				<p>${meal.strInstructions}</p>
			</div>
		</div>
		${meal.strYoutube ? `
		<div class="row">
			<h5>Video Recipe</h5>
			<div class="videoWrapper">
				<iframe width="420" height="315"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>` : ''}
	`;
	
	meal_container.innerHTML = newInnerHTML;
}







// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});