const gestorContactos = {
    data() {
        return {
            contactos: [],
            nuevoNombre: '',
            nuevoTelefono: '',
            nuevaCategoria: '',
            nuevosMensajes: 0,
            nuevasLlamadas: 0,
        };
    },
    computed: {
        totalMensajes() {
            return this.contactos.reduce((acc, contacto) => acc + contacto.mensajes, 0);
        },
        totalLlamadas() {
            return this.contactos.reduce((acc, contacto) => acc + contacto.llamadas, 0);
        }
    },
    methods: {
        agregarNuevoContacto() {
            if (this.nuevoNombre.trim() && this.nuevoTelefono.trim() && this.nuevaCategoria.trim()) {
                this.contactos.push({
                    nombre: this.nuevoNombre.trim(),
                    telefono: this.nuevoTelefono.trim(),
                    categoria: this.nuevaCategoria,
                    mensajes: this.nuevosMensajes,
                    llamadas: this.nuevasLlamadas
                });
                this.resetForm();
            } else {
                alert("Por favor, completa todos los campos.");
            }
        },
        resetForm() {
            this.nuevoNombre = '';
            this.nuevoTelefono = '';
            this.nuevaCategoria = '';
            this.nuevosMensajes = 0;
            this.nuevasLlamadas = 0;
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        },
        modificarMensajes(cambio, index = null) {
            if (index !== null) {
                const nuevoValor = this.contactos[index].mensajes + cambio;
                if (nuevoValor >= 0 && nuevoValor <= 25) {
                    this.contactos[index].mensajes = nuevoValor;
                }
            } else {
                const nuevoValor = this.nuevosMensajes + cambio;
                if (nuevoValor >= 0 && nuevoValor <= 25) {
                    this.nuevosMensajes = nuevoValor;
                }
            }
        },
        modificarLlamadas(cambio, index = null) {
            if (index !== null) {
                const nuevoValor = this.contactos[index].llamadas + cambio;
                if (nuevoValor >= 0 && nuevoValor <= 15) {
                    this.contactos[index].llamadas = nuevoValor;
                }
            } else {
                const nuevoValor = this.nuevasLlamadas + cambio;
                if (nuevoValor >= 0 && nuevoValor <= 15) {
                    this.nuevasLlamadas = nuevoValor;
                }
            }
        }
    }
};

Vue.createApp(gestorContactos).mount('#zona-contactos');
