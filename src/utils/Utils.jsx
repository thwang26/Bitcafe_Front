export const GetPath = () => {
    const path = window.location.pathname
    const pathnameArray = path.split('/')
    const temp = pathnameArray[1]
    return temp.charAt(0).toUpperCase() + temp.slice(1)
}