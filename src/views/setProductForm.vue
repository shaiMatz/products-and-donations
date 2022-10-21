<template>
    <div class="box">
        <h1>product</h1>
        <form @submit.prevent="handleSubmit">
            <label>Product Name:</label>
            <input type="text" v-model="productName" required>

            <label>Password :</label>
            <input type="password" v-model="password" required>
            <div v-if="passwordError" class="error">{{ passwordError }} </div>

            <label>Role :</label>
            <select v-model="role">
                <option value="designer">Web Designer</option>
                <option value="developer">Web Developer</option>
            </select>

            <div>
                <input type="checkbox" value="highschool" v-model="education">
                <label>High School</label>
                <input type="checkbox" value="bechelors" v-model="education">
                <label>Bachelor's Degree</label>
                <input type="checkbox" value="masters" v-model="education">
                <label>Master's Degree</label>
            </div>

            <div>
                <input type="checkbox" v-model="terms" required>
                <label>Please accept terms and conditions</label>
            </div>
            <div class="button">
                <button class="submit" type="submit">Sign up here</button>
            </div>
        </form>

        <p> product name: {{ productName }} </p>
        <p> Password: {{ password }} </p>
        <p> Role: {{ role }} </p>
        <p> Education: <span v-for="edu in education" :key="edu"> {{ edu }}</span></p>
        <p> Terms : {{ terms }} </p>

    </div>

</template>
    
    
<script>
export default {

    data() {
        return {
            productName: '',
            password: '',
            role: 'designer',
            education: [],
            terms: false,
            passwordError: ''
        }
    },
    methods: {

        handleSubmit() {
            //Validate password field length
            this.passwordError = this.password.length > 6 ?
                '' : 'Password should be more than 6 characters long!';
            if (!this.passwordError) {
                console.log(this.productName);
                console.log(this.password);
                console.log(this.role);
                console.log(this.education);
                console.log(this.terms);

            }
        }
    }

}
</script>
    
    
<style scoped>
.box{
    background-color: rgba(186, 218, 236, 0.404);
    border-radius: 10px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.8);
    margin: auto auto;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
form {
    max-width: 600px;
    margin: 30px auto;
    background: #fff;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
}
h1{
    text-align: center;
    text-transform: uppercase;
    text-decoration: solid;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    text-transform: uppercase;
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: bordre-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0;
    position: relative;
    top: 2px;
}

.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
    background: #eee;
}

button {
    background: rgb(7, 24, 7);
    border: 0;
    padding: 10px 20px;
    color: white;
    border-radius: 20px;
}

.submit {
    text-align: center;
}

.error {
    color: #ff0000;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>
    