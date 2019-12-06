import { createToast } from '@evillt/toast'
import copy from '@evillt/copy'

export default (content, msg = 'Copied to clipboard!') => {
  const success = copy(content)

  if (success) {
    createToast(msg, {
      type: 'success',
      timeout: 4000
    })
  }
}
