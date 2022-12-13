
const elem = {
    tableBody: document.querySelector('tbody') as HTMLElement,
    showDogsLink: document.querySelector('#nav__show-dogs') as HTMLAnchorElement,
    showCustomersLink: document.querySelector('#nav__show-customers') as HTMLAnchorElement,
    main: document.querySelector('main') as HTMLElement
}

const mainHTMLDogs = `
    <section>
        <h2>Dogs <i class="fa-solid fa-dog"></i></h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Breed</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Owner</th>
                    <th>Chip #</th>
                    <th>Present</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </section>

    <section class="main__img-container">
        <h3 class="img-container__text">Click on a dog in the list to view their picture!</h3>
    </section>
`

const mainHTMLCustomers = `
    <section>
        <h2>Customers <i class="fa-solid fa-person"></i></i></h2>
        <table>
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone #</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </section>
`

export { elem, mainHTMLCustomers, mainHTMLDogs}