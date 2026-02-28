'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ReservePage() {
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const router = useRouter()

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setLoading(true)

		const form = e.currentTarget
		const formData = new FormData(form)

		const data = {
			name: formData.get('name'),
			phone: formData.get('phone'),
			date: formData.get('date'),
			time: formData.get('time'),
			guests: formData.get('guests'),
		}

		const res = await fetch('/api/reservation', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})

		setLoading(false)

		if (res.ok) {
			setSuccess(true)
			form.reset()
		}
	}

	return (
		<main className='min-h-screen bg-[#0e2e1c] text-white flex items-center justify-center px-6 py-24'>
			<div className='w-full max-w-lg bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md'>
				{!success ? (
					<>
						<h1 className='text-3xl font-bold text-[#d4af37] mb-8 text-center'>
							Reserve a Table
						</h1>

						<form onSubmit={handleSubmit} className='space-y-5'>
							<input
								name='name'
								required
								placeholder='Full Name'
								className='w-full px-4 py-3 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]'
							/>

							<input
								name='phone'
								required
								placeholder='Phone Number'
								className='w-full px-4 py-3 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]'
							/>

							<input
								type='date'
								name='date'
								required
								className='w-full px-4 py-3 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]'
							/>

							<input
								type='time'
								name='time'
								required
								className='w-full px-4 py-3 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]'
							/>

							<input
								type='number'
								name='guests'
								required
								min={1}
								placeholder='Guests'
								className='w-full px-4 py-3 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]'
							/>

							<button
								type='submit'
								disabled={loading}
								className='w-full px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#f2d47a] text-black rounded-full shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:brightness-110 transition-all duration-300 font-medium'
							>
								{loading ? 'Sending...' : 'Reserve Now'}
							</button>
						</form>
					</>
				) : (
					<div className='text-center space-y-6'>
						<h2 className='text-2xl font-semibold text-green-400'>
							Reservation sent successfully!
						</h2>

						<div className='flex flex-col gap-4'>
							<button
								onClick={() => router.push('/')}
								className='w-full px-6 py-3 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all'
							>
								Back to Home
							</button>

							<button
								onClick={() => router.push('/menu')}
								className='w-full px-6 py-3 rounded-full bg-[#d4af37] text-black hover:brightness-110 transition-all'
							>
								View Menu
							</button>
						</div>
					</div>
				)}
			</div>
		</main>
	)
}
