// Uma factory retorna uma nova instância de um objeto

module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}