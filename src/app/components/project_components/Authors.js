
import { ChevronDown, MapPin } from 'lucide-react'

const authors = [
  {
    
    name: "Firstname Middlename Lastname",
    degree: "Doctorate Degree in Computer Science",
    university: "Batangas State University",
    campus: "Alangilan Campus"
  },
  {
    name: "Firstname Middlename Lastname",
    degree: "Doctorate Degree in Computer Science",
    university: "Batangas State University",
    campus: "Alangilan Campus"
  },
  {
    name: "Firstname Middlename Lastname",
    degree: "Doctorate Degree in Computer Science",
    university: "Batangas State University",
    campus: "Alangilan Campus"
  }
]

export default function AuthorsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">About the authors (6)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {authors.map((author, index) => (
        
              <div className="space-y-1">
                <h3 className="font-medium leading-none">{author.name}</h3>
                <p className="text-sm text-muted-foreground">{author.degree}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>
                    {author.university} - {author.campus}
                  </span>
                </div>
              </div>
        ))}
      </div>
      
      </div>  
  )
}