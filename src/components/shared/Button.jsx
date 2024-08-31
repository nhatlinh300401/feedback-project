export default function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn-${version}`}>
        {children}
    </button>
  )
}
