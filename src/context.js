import React, { useContext, useEffect, useState, useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('a');
	const [cocktails, setCocktails] = useState([]);

	const fetchDrinks = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch(`${url}${searchTerm}`);
			const data = await response.json();
			// console.log(data);
			const { drinks } = data;

			if (drinks) {
				const newCocktails = drinks.map((item) => {
					const {
						idDrink,
						strDrink,
						strDrinkThumb,
						strAlcoholic,
						strGlass
					} = item;

					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass
					};
				});
				setCocktails(newCocktails);
			}
			setLoading(false);
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	}, [searchTerm]);

	useEffect(() => {
		fetchDrinks();
		// eslint-disable-next-line
	}, [searchTerm]);

	return (
		<AppContext.Provider
			value={{ loading, cocktails, searchTerm, setSearchTerm }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
