import Image from 'next/image'
import { MouseEventHandler, ReactNode } from 'react'

type Props = {
    title: string
    sub: string
    showSub: boolean
    imgUrl: string
    background: string
    children: ReactNode
    onClick: MouseEventHandler<HTMLButtonElement>
}

const ComponentTemplate: React.FC<Props> = ({ title, showSub, background, imgUrl, children, onClick }) => {
    return (
        <div className="flex justify-center">
            <div className={`flex flex-col md:flex-row md:max-w-xl rounded-lg bg-${background} shadow-lg`}>
                <Image
                    height={100}
                    width={100}
                    alt="Sample"
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={imgUrl}
                />
                <div className="p-6 flex flex-col justify-center">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                    {showSub && <p className="text-gray-500 text-sm mt-2">This is the ComponentTemplate subtitle</p>}
                    <p className="text-gray-700 text-base mt-4 mb-4">{children}</p>

                    <button
                        onClick={onClick}
                        type="button"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md"
                    >
                        Some action
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ComponentTemplate
