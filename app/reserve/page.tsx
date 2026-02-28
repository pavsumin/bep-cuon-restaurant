'use client'

import { useState } from 'react'

export default function ReservePage() {
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		const form = e.currentTarget // ✅ сохраняем ДО await
		setLoading(true)
		setSuccess(false)
		setError(false)

		const formData = new FormData(form)

		const data = {
			name: formData.get('name'),
			phone: formData.get('phone'),
			date: formData.get('date'),
			time: formData.get('time'),
			guests: formData.get('guests'),
		}

		try {
			const res = await fetch('/api/reservation', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			})

			if (!res.ok) throw new Error('Failed')

			setSuccess(true)
			form.reset() // ✅ теперь безопасно
		} catch (err) {
			console.error(err)
			setError(true)
		} finally {
			setLoading(false)
		}
	}

	return (
		<main className='min-h-screen bg-[#0e2e1c] text-white flex items-center justify-center px-6 py-34'>
			<div className='w-full max-w-lg bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md'>
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
						className='
              w-full
              px-8 py-3
              bg-gradient-to-r from-[#d4af37] to-[#f2d47a]
              text-black
              rounded-full
              shadow-[0_8px_30px_rgba(212,175,55,0.4)]
              hover:brightness-110
              hover:scale-101
							cursor-pointer
              transition-all
              duration-300
              font-medium
              disabled:opacity-50
              disabled:cursor-not-allowed
            '
					>
						{loading ? 'Sending...' : 'Reserve Now'}
					</button>

					{success && (
						<p className='text-green-400 text-center mt-4'>
							Reservation sent successfully!
						</p>
					)}

					{error && (
						<p className='text-red-400 text-center mt-4'>
							Something went wrong. Please try again.
						</p>
					)}
				</form>
			</div>
		</main>
	)
}
