'use client'
import ComponentTemplate from '@/templates/components'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ComponentTemplate
                title="Hello World"
                showSub={false}
                background="yellow-600"
                imgUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                sub="Sub"
                onClick={() => console.log('Hello')}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?
            </ComponentTemplate>
        </main>
    )
}
