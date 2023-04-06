// export default function () {
//     return <div>Hello TSX!</div>
// }

// 第二种方法
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        return () => (
            <>
                <div>Hello Tsx!</div>
            </>
        )
    },
})
