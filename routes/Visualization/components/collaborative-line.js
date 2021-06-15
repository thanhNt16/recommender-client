import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const options = {
    chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'User impression per Item',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: [],
      }
}

const seriesData = [{
    name: '',
    data: []
  }]

export default function LineChart() {
    const collaborative = useSelector(({ visualization }) => visualization.collaborative)

    const [series, setSeries] = useState(seriesData)
    const [option, setOption] = useState(options)

    useEffect(() => {
        if (collaborative && collaborative.length !== 0) {
            setSeries([
                {
                    name: 'Impressions: ',
                    data: collaborative.map(item => item.totalImpression)
                }
            ])
            setOption({
                ...options,
                title: {
                    text: 'User interaction per items'
                },
                xaxis: {
                    ...options.xaxis,
                    categories: collaborative.map(item => item._id)
                }

            })
        } 
    }, [collaborative])

    return (
        <Chart options={option} series={series} type="line" />
    )
}
