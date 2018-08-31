## AutoSuggestBox
Auto suggest list, list binding to an array

<u-auto-suggest-box v-model="value" placeholder="请输入查询" :source="suggests"/>
<p>Input value: {{value}}</p>
List content：
<li v-for="li in suggests">{{li}}</li>

<script>
    export default {
        data(){
            return{
                value: '',
                suggests:[
                'Linda',
                'Leila',
                'Wix',
                'Leo',
                'Wilson',
                '路人甲',
                '路人乙',
                ]
            }
        }
    }
</script>