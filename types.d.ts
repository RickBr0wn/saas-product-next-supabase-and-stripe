interface _HomeProps {
	lessons: _Lesson[]
}

interface _Lesson {
	id: string
	title: string
	description: string
}

interface _LessonDetailProps {
	lesson: _Lesson
}
