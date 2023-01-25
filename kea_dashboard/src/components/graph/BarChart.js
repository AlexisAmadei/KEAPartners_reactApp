import { ResponsiveBar } from '@nivo/bar'
import React from 'react'
import { red } from '@mui/material/colors'

const BarChart = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={[
            'value'
        ]}
        indexBy="tribu"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        minValue={0}
        maxValue={90}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={['#AF0929']}
        colorBy="index"
        padding={0.7}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#AF0929',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#AF0929',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        borderRadius={4}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            // legend: 'country',
            // legendPosition: 'middle',
            // legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            // legend: 'food',
            // legendPosition: 'middle',
            // legendOffset: -40
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
    />
)
export default BarChart