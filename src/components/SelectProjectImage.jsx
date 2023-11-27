import { useState } from "react"

const SelectProjectImage = ({ listImgProject, }) => {

  const [image, setImage] = useState(listImgProject[0])

  return (
    <section className='flex items-center flex-col md:flex-row max-w-screen-lg md:gap-10'>
      <div className="flex flex-row gap-1 md:flex-col md:gap-10">
        {
          listImgProject.map((imgProject) => (
            <img
              key={imgProject}
              className="buttonImage w-20 rounded-lg rounded-lg md:w-36 cursor-pointer"
              src={imgProject}
              alt='imagen proyecto'
              onClick={() => setImage(imgProject)}
            />
          ))
        }
      </div>

      <div className="mt-8">
        <img
          id="selectedImage"
          className="w-[80vw] max-w-screen-md rounded-lg"
          src={image}
          alt="Selected Image"
        />
      </div>
    </section>
  )
}

export { SelectProjectImage }