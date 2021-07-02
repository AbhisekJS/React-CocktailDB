import React from 'react';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';

export default function Home() {
	// const {cocktails} = useGlobalContext()
	// console.log(cocktails)
	return (
		<div>
			<SearchForm />
			<CocktailList />
		</div>
	);
}
