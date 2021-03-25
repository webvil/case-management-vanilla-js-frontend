
function newCaseStatus(e) {
    e.preventDefault()
    var caseStatus = {
        status: e.target["status"].value
    }
    fetch("https://localhost:44313/api/casestatus", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(caseStatus)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

function getStatus() {
    fetch("https://localhost:44313/api/casestatus")
        .then(res => res.json())
        .then(data => {

            let options = data.map(option => `<option value="${option.id}">${option.status}</option>`)
            document.getElementById("statusbox").innerHTML = '<option value="">Select status</option>' + options
        })

}
function newCase(e) {
    e.preventDefault()
    var _case = {
        caseWorkerId: e.target["caseworkerbox"].value,
        customerId: e.target["customerbox"].value,
        caseStatusId: e.target["statusbox"].value,
        title: e.target["title"].value,
        description: e.target["description"].value,
        created: new Date(),
        modified: new Date()
    }
    console.log(_case)
    fetch("https://localhost:44313/api/cases", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(_case)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

function getCases() {
    fetch("https://localhost:44313/api/cases")
        .then(res => res.json())
        .then(data => {

            let cases = data.map(_case =>
                `<tr>
					<td>${_case.id}</td>
					<td>${_case.caseStatus.status}</td>
					<td>${_case.customer.firstName} ${_case.customer.lastName}</td>
					<td>${_case.caseWorker.firstName} ${_case.caseWorker.lastName}</td>
					<td>${_case.title}</td>
					<td>${_case.description}</td>
					<td>${_case.created}</td>
					
					`)
            document.getElementById("cases").innerHTML = cases
        })

}
function getCaseWorkers() {
    fetch("https://localhost:44313/api/caseworkers")
        .then(res => res.json())
        .then(data => {

            let options = data.map(option => `<option value="${option.id}">${option.firstName} ${option.lastName}</option>`)
            document.getElementById("caseworkerbox").innerHTML = '<option value="">Select Case Worker</option>' + options
        })



}

function newCaseWorker(e) {
    e.preventDefault()
    var caseWorker = {
        firstName: e.target["caseworker-firstname"].value,
        lastName: e.target["caseworker-lastname"].value,
        email: e.target["caseworker-email"].value,
        phone: e.target["caseworker-phone"].value,
    }
    fetch("https://localhost:44313/api/caseworkers", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(caseWorker)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

function newCustomer(e) {
    e.preventDefault()
    var customer = {
        firstName: e.target["customer-firstname"].value,
        lastName: e.target["customer-lastname"].value,
        addressLine: e.target["addressline"].value,
        postalCode: e.target["postalcode"].value,
        city: e.target["city"].value,
        email: e.target["customer-email"].value,
        phone: e.target["customer-phone"].value,
    }
    fetch("https://localhost:44313/api/customers", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

function getCustomers() {
    fetch("https://localhost:44313/api/customers")
        .then(res => res.json())
        .then(data => {
            console.log('customers ', data)
            let options = data.map(option => `<option value="${option.id}">${option.firstName} ${option.lastName}</option>`)
            document.getElementById("customerbox").innerHTML = '<option value="">Select Customer</option>' + options
        })

}

getCaseWorkers();

getCases();

getCustomers();
getStatus();


