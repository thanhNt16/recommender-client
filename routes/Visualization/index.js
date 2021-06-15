import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import * as Actions from '../../redux/actions/Visualization'
import CollaborativeLine from './components/collaborative-line'

const options = {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        // dataLabels: {
        //   position: 'top', // top, center, bottom
        // },
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [],
      position: 'bottom',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      // crosshairs: {
      //   fill: {
      //     type: 'gradient',
      //     gradient: {
      //       colorFrom: '#D8E3F0',
      //       colorTo: '#BED1E6',
      //       stops: [0, 100],
      //       opacityFrom: 0.4,
      //       opacityTo: 0.5,
      //     }
      //   }
      // },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      }
    //   labels: {
    //     show: false,
    //     formatter: function (val) {
    //       return val + "%";
    //     }
    //   }
    
    },
    title: {
      text: 'Top most interaction items',
    //   floating: true,
    //   offsetY: 330,
    //   align: 'center',
    //   style: {
    //     color: '#444'
    //   }
    }
}

const seriesData = [{
    name: '',
    data: []
  }]

export default function Visualization() {
    const dispatch = useDispatch()
    const sequences = useSelector(({ visualization }) => visualization.sequences)

    const [series, setSeries] = useState(seriesData)
    const [option, setOption] = useState(options)

    useEffect(() => {
        dispatch(Actions.getSequence())
        dispatch(Actions.getCollaborative())
    }, [])


    useEffect(() => {
        if (sequences && sequences.length !== 0) {
            setSeries([
                {
                    name: 'Interactions: ',
                    data: sequences.map(item => item.count)
                }
            ])
            setOption({
                ...options,
                title: {
                    text: 'Top most interaction items'
                },
                xaxis: {
                    ...options.xaxis,
                    categories: sequences.map(item => item._id)
                }

            })
        } 
    }, [sequences])
    return (
        <div>
            <Chart options={option} series={series} type="bar" />
            <CollaborativeLine />
        </div>
    )
}
