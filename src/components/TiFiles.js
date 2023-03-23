import React, { Fragment, useContext, useEffect, useState } from 'react';
import { TiFileContext, TiFormContext } from '../lib/Context';

export default function TiFiles({
	name,
	title,
	label = 'Choose a File',
	fallback,
	...rest
}) {
	const { setValues } = useContext(TiFormContext);
	const [file, setFile] = useState(null);
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		return () => {
			if (rest.disabled) {
				setDisabled(true);
			}
		};
	}, []);

	useEffect(() => {
		if (setValues) {
			setValues((prev) => ({ ...prev, [name]: file }));
		}
	}, [file]);

	const handleFileChange = (event) => {
		const files = event.target.files[0];
		setFile(files);
	};

	return (
		<div className={`px-3 py-2 ${className}`}>
			<TiFileContext.Provider
				value={{
					name,
					isDisabled: disabled,
					setIsDisabled: setDisabled,
					file,
					setFile,
				}}
			>
				<label htmlFor={name} {...rest}>
					{title}
				</label>

				<div
					className={`flex items-center border-2 border-indigo-600 rounded-lg`}
				>
					<label
						htmlFor={`${name}-button`}
						className={`m-2 p-2 py-1 shadow rounded-md border font-medium cursor-pointer bg-white border-indigo-600`}
					>
						<span className="h-full w-full whitespace-nowrap">
							{label}
						</span>
						<input
							id={`${name}-button`}
							name={`${name}-button`}
							type="file"
							className={`sr-only ${className}`}
							onChange={handleFileChange}
							{...rest}
						/>
					</label>
					<div className="ml-3 mr-5">
						<Fragment>
							{file ? (
								<p className="text-sm text-gray-500">
									{file.name} | ({file.size} bytes)
								</p>
							) : (
								<p className="text-sm text-gray-500">
									{fallback}
								</p>
							)}
						</Fragment>
					</div>
				</div>
			</TiFileContext.Provider>
		</div>
	);
}
