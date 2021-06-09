<template>
	<div class="auth-content">
		<div class="auth-modal">
			<img src="@/assets/logo_albert.png" alt="Logo" width="180" />
			<hr />
			<div class="auth-title">{{ showSignup ? "Cadastro" : "Login" }}</div>

			<input
				v-if="showSignup"
				v-model="user.name"
				type="text"
				placeholder="Nome"
			/>
			<input
				v-model="user.email"
				name="email"
				type="text"
				placeholder="E-mail"
			/>
			<input
				v-model="user.password"
				name="password"
				type="password"
				placeholder="Senha"
			/>
			<input
				v-if="showSignup"
				v-model="user.confirmPassword"
				type="password"
				placeholder="Confirme a Senha"
			/>

			<button v-if="showSignup" @click="signup">REGISTRAR</button>
			<button v-else @click="signin">ENTRAR</button>

			<a href @click.prevent="showSignup = !showSignup">
				<span v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
				<span v-else>Não tem cadastro? Registre-se aqui!</span>
			</a>
		</div>
	</div>
</template>

<script>
	import { baseApiUrl, showError, userKey } from "@/global";
	import axios from "axios";

	export default {
		name: "Auth",
		data: function () {
			return {
				showSignup: false,
				user: {},
			};
		},
		methods: {
			signin() {
				axios
					.post(`${baseApiUrl}/signin`, this.user)
					.then((res) => {
						this.$store.commit("setUser", res.data);
						localStorage.setItem(userKey, JSON.stringify(res.data));
						this.$router.push({ path: "/" });
					})
					.catch(showError);
			},
			signup() {
				axios
					.post(`${baseApiUrl}/signup`, this.user)
					.then(() => {
						this.$toasted.global.defaultSuccess();
						this.user = {};
						this.showSignup = false;
					})
					.catch(showError);
			},
		},
	};
</script>

<style>
	.auth-content {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.auth-modal {
		background-color: #fff;
		width: 350px;
		padding: 35px;
		border-radius: 10px;
		box-shadow: 0 0 30px rgba(0, 0, 100, 0.4);

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.auth-title {
		font-size: 1.3rem;
		font-weight: 100;
		margin-bottom: 15px;
	}

	.auth-modal input {
		outline: none;
		border-radius: 5px;
		border: 1px solid #bbb;
		width: 100%;
		margin-bottom: 15px;
		padding: 3px 8px;
	}

	.auth-modal button {
		margin-top: 20px;
		border-radius: 5px;
		width: 100%;
		background-color: #2460ae;
		color: #fff;
		padding: 5px 15px;
	}

	.auth-modal button:hover {
		background-color: #1450aa;
	}

	.auth-modal a {
		margin-top: 35px;
	}
</style>