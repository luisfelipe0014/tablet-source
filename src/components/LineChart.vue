<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    data: {
      type: Array
    },
    data2: {
      type: Array
    },
    labels: {
      type: Array
    }
  },
  mounted () {
    document.getElementById('line-chart').height = '369'
    this.gradient = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(183, 177, 247, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(183, 177, 247, 0.25)')
    this.gradient.addColorStop(1, 'rgba(183, 177, 247, 0)')

    this.gradient2.addColorStop(0, 'rgba(65, 229, 144, 0.9)')
    this.gradient2.addColorStop(0.5, 'rgba(65, 229, 144, 0.25)')
    this.gradient2.addColorStop(1, 'rgba(65, 229, 144, 0)')
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: 'Prisões',
            borderColor: '#7E72F2',
            pointBackgroundColor: '#7E72F2',
            borderWidth: 1,
            pointBorderColor: 'white',
            backgroundColor: this.gradient,
            data: this.data
          },
          {
            label: 'Boletins',
            borderColor: '#2DCD7A',
            pointBackgroundColor: '#2DCD7A',
            pointBorderColor: 'white',
            borderWidth: 1,
            backgroundColor: this.gradient2,
            data: this.data2
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    )
  }
}
</script>
