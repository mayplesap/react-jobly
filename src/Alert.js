/** Alert
 * 
 * props:
 * - message: string
 * - type: string for bootstrap styling
 * 
 * { loginForm, signupForm, profileForm } -> Alert
 */
function Alert({ message, type }) {
  return <div className={`Alert alert alert-${type} mt-3 p-2`}>{message}</div>
}

export default Alert