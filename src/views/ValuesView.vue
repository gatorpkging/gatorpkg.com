<script setup>
import JumbotronComponent from '@/components/JumbotronComponent.vue';
import TableComponent from '@/components/TableComponent.vue';
</script>

<template>
  <div id="app">
    <JumbotronComponent Title="Core Values"
      Description="WIHI is an IB school, and as its robotics team we adhere to the high standards set by the IBO." />

    <div class="values">
      <h2>IB Trait Implementations</h2>
      <TableComponent RowCount="1" ColumnCount="1" Title="Inquirers"
        Text="In our team, we let our curiosity guide us, conducting research on our own time, and exploring every possibility of improving our robot. We take pride in our ability to explore and develop new ideas, both independently and cooperatively." />
      <TableComponent RowCount="1" ColumnCount="1" Title="Knowledgeable"
        Text="While many of us came into the club with very little experience, we've all learned an incredible amount about design and engineering concepts. We strike to expand our knowledge, especially in subjects which can be applied to positive societal change." />
      <TableComponent RowCount="1" ColumnCount="1" Title="Thinkers"
        Text="Even under stress and strict time constraints, we're always careful to evaluate our plans and designs critically, in order to improve on them. We're happy to take on complex problems and create solutions which contribute to our success." />
      <TableComponent RowCount="1" ColumnCount="1" Title="Communicators"
        Text="Our team communicates openly and at length using email and chat, maximizing our collaborative potential. We also hold in-person meetings several times a week in which we discuss, design, and build our robot." />
      <TableComponent RowCount="1" ColumnCount="1" Title="Principaled"
        Text="We are respectful and kind to every member of our team, and educate them instead of shaming them for their lack of experience. While we show pride in our accomplishments, we're humble and respectful toward our opponents as well." />
      <TableComponent RowCount="1" ColumnCount="1" Title="Open-Minded"
        Text="Our club is respectful and open to members of all backgrounds and experience levels. We're always happy to hear new ideas and incorporate them into our design, plan, funding campaign, or anything else." />
      <TableComponent RowCount="1" ColumnCount="1" Title="Caring"
        Text="We are all kind and respectful toward one another, and show empathy toward each other's feelings. Each one of us does our best to improve the robotics experience for everyone on our team." />
      <TableComponent RowCount="1" ColumnCount="1" Title="Risk-Takers"
        Text="While we respect our realistic limitations in funding, membership, and ability, our team is not afraid to take on additional design and construction risks with great potential payoff. We strive to be the best team we can be, and use forethought and critical thinking to evaluate our innovative ambitions, and determination and hard work to accomplish them." />
      <TableComponent RowCount="1" ColumnCount="1" Title="Balanced"
        Text="We understand the importance of mental, emotional, and physical health, and the toll that this team may take on them. Our members always put theirs and their teammate's well-being first, above success or accomplishment. While many members are willing to sacrifice a lot of their time to help the team, we stress the importance of taking care of oneself over that of winning." />
      <TableComponent RowCount="1" ColumnCount="1" Title="Reflective"
        Text="After each change or update we make, we carefully review the effects and problems or solutions it creates in order to adapt and improve our decision-making. Since many of us have very little robotics experience, reflecting on our processes and results is vital to expanding our knowledge." />
    </div>
  </div>
</template>

<style>
.values h2 {
  font-size: 35px;
  text-align: center;
}
</style>
