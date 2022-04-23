# 新增任务功能点

- 实现创建todo
- 用watchEffect实现实时监控，只要监控到todoList发生变化就将其更新到localStorage

# 任务筛选功能点

- 根据hash的变化修改按钮（All、Active、Completed）被选中的状态
- 根据类型筛选出符合条件的todoList
- 实现todo状态的双向绑定
- 对已完成任务添加‘横杠’并置灰
- 实现未完成任务数的提示
- 实现Clear completed样式变化

# 修改任务功能点

- 双击todo变成输入框
- 失焦或enter完成修改
- esc取消修改，并展示修改前数据
- 一键全部完成
# 删除任务功能点

- 修改时有首尾空白，esc会去掉空白
- 修改之后，若无值，则删除
- 点击删除按钮及清除已完成任务时，删除
- 任务数为0，则不展示main、footer
