import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types'

import { supabase } from '../utils/supabase'

const LessonDetails: NextPage<_LessonDetailProps> = ({ lesson }) => {
	return (
		<div className='w-full max-w-3xl mx-auto py-16 px-8'>
			<h1 className='text-3xl mb-6'>{lesson.title}</h1>
			<p>{lesson.description}</p>
		</div>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: lessons } = await supabase.from('lesson').select('id')

	const paths = lessons.map(({ id }: _Lesson) => ({
		params: {
			id: id.toString()
		}
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async context => {
	const { id } = context.params as { id: string }

	const { data: lesson } = (await supabase
		.from('lesson')
		.select('*')
		.eq('id', id)
		.single()) as { data: _Lesson }

	return {
		props: {
			lesson
		}
	}
}

export default LessonDetails
