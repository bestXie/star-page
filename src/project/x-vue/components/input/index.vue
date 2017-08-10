<style scoped>

    .bar-container-item-box {
        height: .88rem;
    }

    input::placeholder {
        color: #ddd
    }

    input:-ms-input-placeholder {
        color: #ddd
    }

    input::-webkit-input-placeholder {
        color: #ddd
    }

    input:-ms-input-placeholder {
        color: #ddd
    }

</style>

<template>
    <div class="input-box">
        <div class="h-30"></div>
        <div class="bar-container-wrapper">
            <div class="bar-container-item-box x-border-1px-bottom">
                <div class="bar-container-item-r">
                    <input class="input"
                           autocomplete="off"
                           autocapitalize="off"
                           autocorrect="off"
                           spellcheck="false"
                           :maxlength="max"
                           type="text" :placeholder="placeholder||'请输入'"
                           v-model="currentValue"
                           :disabled="disabled"
                           :readonly="readonly"
                           @focus="focusHandler"
                           @blur="onBlur"
                           @keyup="onKeyUp"
                           ref="input"
                           v-focus>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getStore, setStore, setTitle} from '../../util/index';
    import Focus from '../../directives/focus/index.js'
    export default {
        name: 'page_banner_index',
        directives: {
            Focus
        },
        data () {
            return {
                currentValue: ''
            }
        },
        props: {
            title: {default: ''},
            placeholder: {default: ''},
            max: Number,
            min: Number,
            required: Boolean,
            disabled: Boolean,
            readonly: Boolean,
        },
        mounted () {
            if (this.title) {
                setTitle(this.title)
            }
        },
        created () {
            this.currentValue = this.value || '';
            if (!this.title && !this.placeholder && !this.currentValue) {
                console.warn('no title and no placeholder?')
            }
            if (this.required && !this.currentValue) {
                this.valid = false
            }
            this.handleChangeEvent = true;
            if (this.debounce) {
                this._debounce = Debounce(() => {
                    this.$emit('on-change', this.currentValue)
                }, this.debounce)
            }
        },
        methods: {
            reset (value = '') {
                this.dirty = false;
                this.currentValue = value;
                this.firstError = '';
                this.valid = true
            },
            focus () {
                this.$refs.input.focus()
            },
            blur () {
                this.$refs.input.blur()
            },
            focusHandler () {
                this.$emit('on-focus', this.currentValue)
            },
            onBlur () {
                this.$emit('on-blur', this.currentValue)
            },
            onKeyUp (e) {
                if (e.key === 'Enter') {
                    e.target.blur();
                    this.$emit('on-enter', this.currentValue)
                }
            },
            validate () {
                this.errors = {};
                if (!this.currentValue && !this.required) {
                    this.valid = true;
                    return
                }

                if (!this.currentValue && this.required) {
                    this.valid = false;
                    this.errors.required = '当前选项不能为空';
                    this.getError();
                    return
                }

                if (this.min) {
                    if (this.currentValue.length < this.min) {
                        this.errors.min = `最少应该输入${this.min}个字符哦`;
                        this.valid = false;
                        if (!this.firstError) {
                            this.getError()
                        }
                        return
                    } else {
                        delete this.errors.min
                    }
                }

                if (this.max) {
                    if (this.currentValue.length > this.max) {
                        this.errors.max = `最多可以输入${this.max}个字符哦`;
                        this.valid = false;
                        this.forceShowError = true;
                        return
                    } else {
                        this.forceShowError = false;
                        delete this.errors.max;
                    }
                }

                this.valid = true
            },
            getError () {
                let key = Object.keys(this.errors)[0];
                this.$store.commit('tostError', {content: this.errors[key]});
            },

        },
        watch: {
            valid () {
                this.getError();
            },
            currentValue (newVal) {
                this.$emit('input', newVal);
                if (this._debounce) {
                    this._debounce()
                } else {
                    this.$emit('on-change', newVal)
                }
            }
        }
    }
</script>
