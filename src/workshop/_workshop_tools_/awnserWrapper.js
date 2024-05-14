import {useState} from 'react'

const Wrapper = ({ children }) => {
    const [show, setShow] = useState(false)

    if(!show) {
        return <div onClick={() => {setShow(true)}}>
            I am currently stuck or wish to compare my awnser, this is not a mistake. (click here to show story)
        </div>
    } else {
        return <> {children} </>
    }
}
export default Wrapper