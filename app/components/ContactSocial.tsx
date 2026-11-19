export function ContactScial(){
    return (
        <div className="flex">
            <a href="https://github.com/Gianine12" target="_blank" rel="noopener noreferrer" className="ml-2 mr-2 cursor-pointer">
                <img 
                    src="./github-50.png" 
                    alt="icone github" 
                    className="w-10" 
                    style={{
                        filter: "brightness(0) saturate(100%) invert(45%) sepia(91%) saturate(750%) hue-rotate(9deg) brightness(85%) contrast(95%)"
                    }}
                />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer"  className="ml-2 mr-2 cursor-pointer">
                <img 
                    src="./linkedin-50.png" 
                    alt="icone linkedin" 
                    className="w-10" 
                    style={{
                        filter: "brightness(0) saturate(100%) invert(45%) sepia(91%) saturate(750%) hue-rotate(9deg) brightness(85%) contrast(95%)"
                    }}
                />
            </a>
            <a href="mailto:gianine1508@gmail.com" target="_blank" rel="noopener noreferrer" className="ml-2 mr-2 cursor-pointer">
                <img 
                    src="./e-mail.png" 
                    alt="icone email" 
                    className="w-10" 
                    style={{
                        filter: "brightness(0) saturate(100%) invert(45%) sepia(91%) saturate(750%) hue-rotate(9deg) brightness(85%) contrast(95%)"
                    }}
                />
            </a>
        </div>
    )
}