import FeaturedDishes from '@/components/FeaturedDishes'
import Hero from '@/components/Hero'
import MichelinBlock from '@/components/MichelinBlock'
import StorySection from '@/components/StorySection'

export default function Home() {
	return (
		<main className='bg-brandGreen'>
			<Hero />
			<FeaturedDishes />
			<MichelinBlock />
			<StorySection />
		</main>
	)
}
