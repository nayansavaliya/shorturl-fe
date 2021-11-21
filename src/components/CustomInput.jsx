export default function CustomInput({
	name,
	type,
	label,
	value,
	onChange,
	errorText,
	error,
	...otherProps
}) {
	return (
		<div className="mb-3">
			<label className="h6 form-label" for={name}>
				{label}
			</label>
			<input
				className="form-control"
				type={type}
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				placeholder={label}
				{...otherProps}
			/>
			{error && (
				<p className="text-danger" style={{ marginTop: '5px' }}>
					{errorText}
				</p>
			)}
		</div>
	)
}