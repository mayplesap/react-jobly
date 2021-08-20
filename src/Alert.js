/** Alert
 * 
 * props:
 * - message
 * 
 * { loginForm, signupForm } -> Alert
 */
function Alert({ message, type }) {
  return <div className={`Alert alert alert-${type} mt-3 p-2`}>{message}</div>
}

export default Alert