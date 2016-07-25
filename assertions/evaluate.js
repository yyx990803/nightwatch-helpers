exports.assertion = function (fn, args, msg) {
  this.message = 'Testing custom eval' + (msg ? ': ' + msg : '...')
  this.expected = true
  this.value = function (res) {
    return res.value
  }
  this.pass = function (val) {
    return val === this.expected
  }
  this.command = function (cb) {
    var self = this
    return this.api.execute(fn, args || [], function (res) {
      cb.call(self, res)
    })
  }
}
