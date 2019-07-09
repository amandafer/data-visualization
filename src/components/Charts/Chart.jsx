import React from 'react';
import { Chart } from 'react-google-charts';

const EnhancedChart = ({ type, data, title }) => {
	debugger;
	return (
		<Chart
			key={type}
			chartType={type}
			data={data}
			options={{
				title
			}}
			width='100%'
			height='400px'
			legendToggle
		/>
	);
};

EnhancedChart.defaultProps = {
	data: []
};

export default EnhancedChart;
