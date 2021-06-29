axios
  .get("http://api.coindesk.com/v1/bpi/historical/close.json")
  .then((bitcoinValues) => {
    console.log("The response from API: ", bitcoinValues);
    const dailyValues = bitcoinValues.data.bpi;
    const bitcoinDates = Object.keys(dailyValues);
    const bitcoinPrices = bitcoinDates.map(date => dailyValues[date]);
   
    const ctx = document.getElementById('my-chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: bitcoinDates,
        datasets: [
          {
            label: 'Price',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: bitcoinPrices
          }
        ]
      }
    }); 
  })
  .catch(e => {
      console.error("Error while getting the data: ", e)
    });
