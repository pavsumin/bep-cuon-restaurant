import FeaturedDishes from '@/components/FeaturedDishes'
import Hero from '@/components/Hero'

export default function Home() {
	return (
		<main className='bg-brandGreen'>
			<Hero />
			<FeaturedDishes />
		</main>
	)
}
