/** Alert
 * 
 * props:
 * - message
 * 
 * { loginForm, signupForm } -> Alert
 */
function Alert({ message }) {
  return <div className="Alert alert alert-danger mt-3 p-2">{message}</div>
}

export default Alert