<template>
<v-main>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="auto" class="text-h4 text-sm-h3">
        お問い合わせ
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col
        cols="12"
        sm="10"
        lg="8"
        xl="6"
      >
        <v-form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/"
        >
          <input type="hidden" name="form-name" value="contact">
          <div v-if="selections != ''" class="d-flex">
          <v-checkbox
            v-for="selection in selections"
            :key="selection"
            v-model="checked"
            :label="selection"
            :value="selection"
            name="checked[]"
            class="pr-4"
          ></v-checkbox>
          </div>
          <v-combobox
            v-if="items != '' && comboLabel != ''"
            v-model="selected"
            :items="items"
            :background-color="color.contact.input"
            :label="comboLabel"
            name="selected[]"
            multiple
            outlined
          ></v-combobox>
          <v-text-field
            v-if="corporateLabel != ''"
            v-model="corporateName"
            :background-color="color.contact.input"
            :label="corporateLabel"
            name="corporate-name"
              outlined
          ></v-text-field>
          <v-text-field
            v-if="nameLabel != ''"
            v-model="contactName"
            :background-color="color.contact.input"
            :label="nameLabel"
            name="contact-name"
            outlined
          ></v-text-field>
          <v-text-field
            v-if="emailLabel != ''"
            v-model="email"
            :background-color="color.contact.input"
            :label="emailLabel"
            name="email"
            outlined
          ></v-text-field>
          <v-textarea
            v-if="contentLabel != ''"
            v-model="content"
            :background-color="color.contact.input"
            :label="contentLabel"
            name="content"
            outlined
          ></v-textarea>
          <v-text-field
            v-model="botField"
            label="人間は入力しないでください"
            name="bot-field"
            v-show="false"
          />
          <v-row no-gutters class="justify-center">
            <v-col cols="auto">
              <v-btn
                type="submit"
                :color="color.btn.bg"
                :style="`color:${color.btn.txt};`"
                class="title"
                large
              >
                送信
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script>

export default {
    data() {
      return {
        scroll: false,
        color: {
          btn: {bg: process.env.colorBtnBg, txt: process.env.colorBtnTxt},
          contact: {input: process.env.colorContactInput}
        },
        comboLabel: process.env.contactComboLabel,
        corporateLabel: process.env.contactCorporateLabel,
        nameLabel: process.env.contactNameLabel,
        emailLabel: process.env.contactEmailLabel,
        contentLabel: process.env.contactContentLabel,
        checked: [],
        selected: [],
        corporateName: '',
        contactName: '',
        email: '',
        content: '' ,
        botField: ''
      }
    },
    methods: {
      inputForm () {
        if (this.$route.query.checked) {
          this.checked = [this.$route.query.checked]
        }
        if (this.$route.query.selected) {
          this.selected = [this.$route.query.selected]
        }
        if (this.$route.query.content) {
          this.content = this.$route.query.content
        }
      }
    },
    mounted () {
      this.inputForm()
    },
    computed: {
      selections () {
        return process.env.contactSelections.split(',')
      },
      items () {
        return process.env.contactComboItems.split(',')
      }
    },
    head () {
      return {
        title: process.env.topTitle,
        titleTemplate: (process.env.topTemplate != '')? process.env.topTemplate : `%s - ${process.env.siteName}`,
      }
    }
}
</script>