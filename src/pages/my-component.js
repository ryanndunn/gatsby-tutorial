// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/seo'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const MyComponent = () => {
  return (
    <main>
        <h1>Hi, welcome to my site!</h1>
        <Link to="/">Back Home</Link>
    </main>
  )
}

export const Head = () => <Seo title="My Component" />

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default MyComponent