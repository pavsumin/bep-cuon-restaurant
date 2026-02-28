import FeaturedPreview from '@/components/FeaturedPreview'
import GallerySection from '@/components/GallerySection'
import Hero from '@/components/Hero'
import MichelinBlock from '@/components/MichelinBlock'
import StorySection from '@/components/StorySection'

export default function Home() {
	return (
		<main className='bg-brandGreen'>
			<Hero />
			<FeaturedPreview />
			<MichelinBlock />
			<StorySection />
			<GallerySection />
		</main>
	)
}
