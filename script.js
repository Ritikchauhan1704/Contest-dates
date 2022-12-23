let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {
  ihtml = ""
  for (item in contests) {
    ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                                <div class="card-body">
                                        <h5 class="card-title">${contests[item].name}</h5>
                                        <p class="card-text"> Site is <b>${contests[item].site}</b></p>
                                        <p class="card-text"> In 24 Hours? <b>${contests[item].in_24_hours} </b></p>
                                        <p>Starts at: ${contests[item].start_time.slice(0, 10)}</p>
                                        <p>Ends at: ${contests[item].end_time.slice(0, 10)}</p>
                                        <a href="${contests[item].url}" target="_blank" class="btn btn-primary my-4">Visit Contest</a>
                                </div>
                        </div>
                `
  }
  container.innerHTML = ihtml
})

