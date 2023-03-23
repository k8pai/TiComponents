import TiFiles from './TiFiles';
import TiMultiselect from './TiMultiSelect';

export const UsageTiFiles = () => {
	return (
		<TiFiles name="files" className={'mb-4 w-fit '}>
			{({ isDisabled }) => (
				<>
					<TiFiles.Label
						title={'Select A File'}
						className={`block text-lg ml-1 font-semibold mb-2`}
					/>
					<div
						className={`flex items-center border-2 border-indigo-600 rounded-lg ${
							isDisabled ? 'border-gray-500 bg-gray-200/50' : null
						}`}
					>
						<TiFiles.FileWrapper
							className={`m-2 p-2 py-1 shadow rounded-md border font-medium ${
								isDisabled
									? 'border-gray-500 bg-gray-400/30 cursor-default text-gray-500'
									: 'cursor-pointer bg-white border-indigo-600'
							} `}
						>
							<TiFiles.File disabled />
						</TiFiles.FileWrapper>

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
				</>
			)}
		</TiFiles>
	);
};

export const UsageTiText = () => {
	return (
		<div className="relative mb-4 max-w-md w-full">
			<TiMultiselect></TiMultiselect>
		</div>
	);
};
