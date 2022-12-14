/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { supabase } from '../utils/supabase'

const Logout: NextPage = (): JSX.Element => {
	const router = useRouter()

	useEffect(() => {
		const logout = async () => {
			await supabase.auth.signOut()
			router.push('/')
		}

		logout()
	}, [])

	return <p>Logging out</p>
}

export default Logout
