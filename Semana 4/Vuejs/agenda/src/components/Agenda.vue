
<!-- Soy un comentario 
Para iniciar, vue init webpack agenda (u otro nombre)
Para ejecutar, usar npm run dev

-->

<!-- Pancho : "Resulta que yo normalmente tengo una agendita donde 
voy anotando en cada fila pues el nombre de un contacto y su correo 
con la intención de más tarde llamarle y una vez lo llamo pues ya cojo 
y lo tacho de la lista, ¿lo típico no?"

Pero claro, ahora quiero algo parecido pero en digital, necesito que me 
hagas una app para poder hacer lo mismo que ya hago ahora pero aprovechando
que es digital pues también podrías ponerle las siguientes opciones:-->

<!--
*Que no me deje meter un correo ya introducido.

*Que pueda ocultar de la lista los que ya están contactados.

*Que pueda eliminar una fila de la lista (ojo, eliminarla no marcarla como contactada).

*Que pueda editar un elemento de la lista.

*Que valides que he metido un nombre de más de 6 letras, que a veces se me olvida poner su nombre.

*Un botón para vaciar la lista completa.

*Un botón para marcar todos los todos como completados. -->

<template>
  <div class="agenda">
    <input id="nombre" type="text"  placeholder="Añadir nombre" v-model="contact.name">
    <input id="email" type="text" placeholder="Añadir Correo" v-model="contact.email"@keyup.enter="checkMail(contact)">
    <button v-if="!showed"  @click.prevent="showAllCalled">Show called</button>
    <button v-else @click.prevent="hideCalled">Hide called</button>
    <button @click.prevent="hideAll">Hide/Show All</button>
    <button @click.prevent="removeAll">Remove All</button>
    <div 
    class="contacts" 
    v-for="contact in contacts"
    >
    <div class="contact" v-bind:class="{'completed': contact.called, 'hide': !contact.visible}">
      <input type="checkbox" v-model="contact.called" name="contact" @click="called()">      
      <span class="contact">Name: {{contact.name}} Email: {{contact.email}}</span>
      <button @click.prevent="deleteContact(contact)">Delete</button>
      <button @click.prevent="editContact(contact)">Edit</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Agenda",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        called: false,
        visible: true
      },
      contacts: [
        {
          name: "Ruben",
          email: "ruben@ruben.es",
          called: false,
          visible: true
        },
        {
          name: "Pepe",
          email: "pepe@pepe.es",
          called: false,
          visible: true
        }
      ],
      showed: true,
      isEditing: false
    };
  },
  methods: {
    addContact(contacto) {
      console.log("Añadir contacto");
      this.contacts.push(contacto);
      this.contact = {
        name: "",
        email: "",
        called: false,
        visible: true
      };
      console.log(this.contacts);
    },
    called() {
      console.log("Contacto marcado como llamado");
    },
    checkMail(contacto) {
      if (!this.checkNameLength(this.contact.name)) {
        return;
      }
      if (this.isEditing) {
        console.log("Vamos a editar a " + this.isEditing);
        var contactoBuscado = this.contacts.find(contactToFind => {
          return this.isEditing == contactToFind.email;
        });
        contactoBuscado.name = contacto.name;
        contactoBuscado.email = contacto.email;
        this.isEditing = false;
      } else if (
        !this.contacts.some(contactSome => contactSome.email == contacto.email)
      ) {
        this.addContact(contacto);
      }
    },
    hideCalled() {
      console.log("Ocultar los completados");
      this.showed = false;
      this.contacts.forEach(function(contact) {
        if (contact.called) {
          contact.visible = false;
        }
      });
    },
    showAllCalled() {
      console.log("Mostrar los completados");
      this.showed = true;
      this.contacts.forEach(function(contact) {
        contact.visible = true;
      });
    },
    deleteContact(contacto) {
      console.log("delete contact " + contacto.name);
      this.contacts = this.contacts.filter(
        contact => contact.email != contacto.email
      );
    },
    editContact(contacto) {
      console.log("Se va a editar al contacto " + contacto.name);
      this.isEditing = contacto.email;
      this.contact = Object.assign({}, contacto);
      console.log(contacto);
    },
    hideAll() {
      console.log("Ocultar todos");
      this.contacts.forEach(function(contact) {
        contact.visible = !contact.visible;
      });
    },
    removeAll() {
      console.log("Eliminar todos");
      this.contacts = [];
    },
    checkNameLength(nombre) {
      if (nombre.length < 4) {
        alert("El nombre debe tener mas de 4 caractéres");
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.agenda {
  background-color: goldenrod;
}

.completed {
  text-decoration: line-through;
}

.hide {
  display: none;
}
</style>
