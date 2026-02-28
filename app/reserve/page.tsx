'use client'

import { useState } from 'react'

export default function ReservePage() {
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)
	const [selectedDate, setSelectedDate] = useState<string>('')

	const today = new Date().toISOString().split('T')[0]

	function getMaxTime(date: string) {
		if (!date) return '21:00'

		const day = new Date(date).getDay()

		// 6 = Saturday
		if (day === 6) return '20:00'

		return '21:00'
	}

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
			form.reset() // теперь безопасно
		} catch (err) {
			console.error(err)
			setError(true)
		} finally {
			setLoading(false)
		}
	}

	return (
		<main className='min-h-screen bg-[#0e2e1c] text-white flex items-center justify-center px-4 py-20 md:py-32'>
			<div className='w-full max-w-lg bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-md'>
				<h1 className='text-2xl md:text-3xl font-bold text-[#d4af37] mb-6 md:mb-8 text-center'>
					Reserve a Table
				</h1>

				<form onSubmit={handleSubmit} className='space-y-4 md:space-y-5'>
					<input
						name='name'
						required
						placeholder='Full Name'
						className='w-full text-base px-4 py-3 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]'
					/>

					<input
						name='phone'
						required
						placeholder='Phone Number'
						className='w-full text-base px-4 py-3 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]'
					/>

					<input
						type='date'
						name='date'
						required
						min={today}
						value={selectedDate}
						onChange={e => setSelectedDate(e.target.value)}
						className='w-full text-base px-4 py-3 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]'
					/>

					<input
						type='time'
						name='time'
						required
						min='10:30'
						max={getMaxTime(selectedDate)}
						className='w-full text-base px-4 py-3 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]'
					/>

					<input
						type='number'
						name='guests'
						required
						min={1}
						placeholder='Guests'
						className='w-full text-base px-4 py-3 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37]'
					/>

					<button
						type='submit'
						disabled={loading}
						className='
          w-full
          mt-2
          px-8
          py-3
          bg-gradient-to-r
          from-[#d4af37]
          to-[#f2d47a]
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
        '
					>
						{loading ? 'Sending...' : 'Reserve Now'}
					</button>

					{success && (
						<p className='text-green-400 text-center mt-3'>
							Reservation sent successfully!
						</p>
					)}
				</form>
			</div>
		</main>
	)
}
