import React from 'react';
import { useGlobalContext } from '../context';
import { Loading } from '../components/Loading';
import Cocktail from './Cocktail';

export default function CocktailList() {
	const { cocktails, loading } = useGlobalContext();

	if (loading) {
		return <Loading />;
	}
	if (cocktails.length < 1) {
		return <h2>Sorry No Cocktails Found </h2>;
	}

	// console.log(cocktails);
	return (
		<section className="section">
			<h2 className="section-title">cocktails</h2>
			<div className="cocktails-center">
				{cocktails.map((item) => {
					return <Cocktail key={item.id} {...item} />;
				})}
			</div>
		</section>
	);
}
