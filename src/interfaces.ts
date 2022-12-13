interface Customer {
    lastName: string,
    name: string,
    phoneNumber: number
}

type MaleOrFemale = ("male" | "female")

interface Dog {
    age: number,
    breed: string,
    chipNumber: string,
    img: string,
    name: string,
    owner: Customer,
    present: boolean,
    sex: MaleOrFemale
}

export { Customer, Dog }