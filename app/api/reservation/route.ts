export const runtime = 'nodejs'

import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const auth = new google.auth.JWT({
			email: process.env.GOOGLE_CLIENT_EMAIL,
			key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
			scopes: ['https://www.googleapis.com/auth/spreadsheets'],
		})

		const sheets = google.sheets({ version: 'v4', auth })

		await sheets.spreadsheets.values.append({
			spreadsheetId: process.env.GOOGLE_SHEET_ID,
			range: 'Sheet1!A:F',
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: [
					[
						new Date().toISOString(),
						body.name,
						body.phone,
						body.date,
						body.time,
						body.guests,
					],
				],
			},
		})

		return NextResponse.json({ success: true })
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error'

		console.error('GOOGLE ERROR:', error)
		return NextResponse.json({ error: message }, { status: 500 })
	}
}
